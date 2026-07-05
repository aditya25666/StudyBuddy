import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";

class AuthService {
  // Register User
  async register(userData) {
    const { fullName, email, password } = userData;

    // Check required fields
    if (!fullName || !email || !password) {
      throw new ApiError(400, "All fields are required");
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(409, "Email already exists");
    }

    // Create user
    const user = await User.create({
      fullName,
      email,
      password,
    });

    // Generate JWT
    const token = user.generateToken();

    // Remove password from response
    const newUser = await User.findById(user._id).select("-password");

    return {
      user: newUser,
      token,
    };
  }

  // Login User
  async login(email, password) {
    if (!email || !password) {
      throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = user.generateToken();

    const loggedInUser = await User.findById(user._id).select("-password");

    return {
      user: loggedInUser,
      token,
    };
  }

  // Current User
  async getCurrentUser(userId) {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    return user;
  }
}

export default new AuthService();