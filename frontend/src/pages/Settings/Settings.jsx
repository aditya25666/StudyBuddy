import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  Trash2,
  Save,
} from "lucide-react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const Settings = () => {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account and application preferences.
        </p>

      </div>

      {/* Profile */}

      <Card className="p-8">

        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold">

          <User className="text-cyan-400" />

          Profile

        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <Input
              type="text"
              placeholder="Aditya"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>

            <Input
              type="email"
              placeholder="aditya@gmail.com"
            />

          </div>

        </div>

      </Card>

      {/* Password */}

      <Card className="p-8">

        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold">

          <Lock className="text-cyan-400" />

          Change Password

        </h2>

        <div className="space-y-5">

          <Input
            type="password"
            placeholder="Current Password"
          />

          <Input
            type="password"
            placeholder="New Password"
          />

          <Input
            type="password"
            placeholder="Confirm Password"
          />

        </div>

      </Card>

      {/* Preferences */}

      <Card className="p-8">

        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold">

          <Bell className="text-cyan-400" />

          Preferences

        </h2>

        <div className="space-y-6">

          <label className="flex items-center justify-between">

            <span>Email Notifications</span>

            <input type="checkbox" defaultChecked />

          </label>

          <label className="flex items-center justify-between">

            <span>Dark Mode</span>

            <input type="checkbox" defaultChecked />

          </label>

          <label className="flex items-center justify-between">

            <span>AI Suggestions</span>

            <input type="checkbox" defaultChecked />

          </label>

        </div>

      </Card>

      {/* Danger Zone */}

      <Card className="border border-red-500/30 p-8">

        <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-red-400">

          <Trash2 />

          Danger Zone

        </h2>

        <p className="mb-6 text-slate-400">

          Permanently delete your StudyBuddy account.
          This action cannot be undone.

        </p>

        <Button className="bg-red-600 hover:bg-red-700">

          Delete Account

        </Button>

      </Card>

      {/* Save */}

      <div className="flex justify-end">

        <Button size="lg">

          <Save className="mr-2 h-5 w-5" />

          Save Changes

        </Button>

      </div>

    </div>
  );
};

export default Settings;