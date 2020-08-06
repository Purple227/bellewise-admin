<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\NexmoMessage;


class DriverCredentials extends Notification implements ShouldQueue
{
    use Queueable;

    public $driver;
    public $password;
    public $driver_id;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($driver, $password, $driver_id)
    {
        $this->driver = $driver;
        $this->password = $password;
        $this->driver_id = $driver_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'nexmo'];
    }


    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
        ->subject('Your bellewise Details')
        ->greeting('Hello' . " " .$this->driver->name)
        ->line(  'Below is your account details to gain access to our app.') 
        ->line( 'Password:' .' ' . $this->password)
        ->line( 'Driver ID:' .' ' . $this->driver_id)
        ->action('Get the app', url('/') )
        ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }

    /**
     * Get the Nexmo / SMS representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return NexmoMessage
     */
    public function toNexmo($notifiable)
    {

        $password = $this->password;
        $id = $this->driver_id;
        $email = $this->driver->email;
        $name = $this->driver->name;
        $message = 'Hi' . ' ' .$name . ' ' . 'here are your details to gain access to your Bellewise driver app' . ' ' . 'Email:' .$email . ' ' . 'Password:' .$password . ' ' . 'ID:' .$id .' '. 'Regards, Bellewise';
        return (new NexmoMessage)
        ->content($message);
    }


    }
