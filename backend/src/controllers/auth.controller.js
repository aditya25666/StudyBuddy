import authService from "../services/auth.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class AuthController {
  // Register
  async register(req, res, next) {
    try {
      const result = await authService.register(req.body);

      res.cookie("token", result.token, {
        httpOnly: true,
        secure: false, // Change to true in production (HTTPS)
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            "User registered successfully",
            result.user
          )
        );
    } catch (error) {
      next(error);
    }
  }

  // Login
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await authService.login(email, password);

      res.cookie("token", result.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            "Login successful",
            result.user
          )
        );
    } catch (error) {
      next(error);
    }
  }

  // Logout
  logout(req, res) {
    res.clearCookie("token");

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Logout successful"
        )
      );
  }

  // Current User
  async getCurrentUser(req, res, next) {
    try {
      const user = await authService.getCurrentUser(req.user.id);

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            "User fetched successfully",
            user
          )
        );
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();