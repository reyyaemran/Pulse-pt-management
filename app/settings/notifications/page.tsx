"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function NotificationsPage() {
  const { toast } = useToast()

  const handleSaveNotifications = () => {
    toast({
      title: "Notifications updated",
      description: "Your notification preferences have been saved successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage your email notification preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-sessions" className="flex-1">
              <div className="font-medium">Session Reminders</div>
              <div className="text-sm text-muted-foreground">Receive email reminders about upcoming sessions.</div>
            </Label>
            <Switch id="email-sessions" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-bookings" className="flex-1">
              <div className="font-medium">New Bookings</div>
              <div className="text-sm text-muted-foreground">Receive emails when clients book new sessions.</div>
            </Label>
            <Switch id="email-bookings" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-cancellations" className="flex-1">
              <div className="font-medium">Cancellations</div>
              <div className="text-sm text-muted-foreground">Receive emails when clients cancel sessions.</div>
            </Label>
            <Switch id="email-cancellations" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-marketing" className="flex-1">
              <div className="font-medium">Marketing</div>
              <div className="text-sm text-muted-foreground">Receive emails about new features and promotions.</div>
            </Label>
            <Switch id="email-marketing" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage your push notification preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-sessions" className="flex-1">
              <div className="font-medium">Session Reminders</div>
              <div className="text-sm text-muted-foreground">Receive push notifications about upcoming sessions.</div>
            </Label>
            <Switch id="push-sessions" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-bookings" className="flex-1">
              <div className="font-medium">New Bookings</div>
              <div className="text-sm text-muted-foreground">
                Receive push notifications when clients book new sessions.
              </div>
            </Label>
            <Switch id="push-bookings" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-cancellations" className="flex-1">
              <div className="font-medium">Cancellations</div>
              <div className="text-sm text-muted-foreground">
                Receive push notifications when clients cancel sessions.
              </div>
            </Label>
            <Switch id="push-cancellations" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMS Notifications</CardTitle>
          <CardDescription>Manage your SMS notification preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="sms-sessions" className="flex-1">
              <div className="font-medium">Session Reminders</div>
              <div className="text-sm text-muted-foreground">Receive SMS reminders about upcoming sessions.</div>
            </Label>
            <Switch id="sms-sessions" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="sms-bookings" className="flex-1">
              <div className="font-medium">New Bookings</div>
              <div className="text-sm text-muted-foreground">
                Receive SMS notifications when clients book new sessions.
              </div>
            </Label>
            <Switch id="sms-bookings" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="sms-cancellations" className="flex-1">
              <div className="font-medium">Cancellations</div>
              <div className="text-sm text-muted-foreground">
                Receive SMS notifications when clients cancel sessions.
              </div>
            </Label>
            <Switch id="sms-cancellations" />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSaveNotifications}>Save preferences</Button>
    </div>
  )
}
