"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// import { useToast } from "@/hooks/use-toast"
import {
  FileText,
  Users,
  Settings,
  Home,
  FolderOpen,
  UserCheck,
  ClipboardList,
  BarChart3,
  Save,
  User,
  Bell,
  Shield,
  Database,
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    autoBackup: true,
    darkMode: false,
    language: "English",
    timezone: "EAT",
  });
  // const { toast } = useToast()

  const handleSaveSettings = () => {
    // toast({
    //   title: "Settings Saved",
    //   description: "Your preferences have been updated successfully.",
    // })
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white h-16 flex items-center px-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">N</span>
          </div>
          <div>
            <h1 className="font-semibold">
              National Water Harvesting & Storage Authority
            </h1>
            <p className="text-xs text-blue-100">Project Management System</p>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <span className="text-sm">Project Manager</span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Large Dam Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/small-dams"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Small Dam Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <UserCheck className="h-4 w-4" />
                  <span className="text-sm">Expert Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contracts"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <ClipboardList className="h-4 w-4" />
                  <span className="text-sm">Contract Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600"
                >
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              System Settings
            </h1>
            <p className="text-gray-600">
              Manage your system preferences and configurations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Profile */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">User Profile</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" defaultValue="Project Manager" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="manager@nwhsa.go.ke"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" defaultValue="Project Management" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={settings.notifications}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, notifications: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-alerts">Email Alerts</Label>
                    <Switch
                      id="email-alerts"
                      checked={settings.emailAlerts}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, emailAlerts: checked })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-backup">Auto Backup</Label>
                    <Switch
                      id="auto-backup"
                      checked={settings.autoBackup}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, autoBackup: checked })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">Security</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">System</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Input id="language" defaultValue="English" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input
                      id="timezone"
                      defaultValue="East Africa Time (EAT)"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch
                      id="dark-mode"
                      checked={settings.darkMode}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, darkMode: checked })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleSaveSettings}
            >
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
