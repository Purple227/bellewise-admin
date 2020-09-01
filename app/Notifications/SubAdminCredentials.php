<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\NexmoMessage;


class SubAdminCredentials extends Notification implements ShouldQueue
{
    use Queueable;

    public $sub_admin;
    public $password;
    public $sub_admin_id;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($sub_admin, $password, $sub_admin_id)
    {
        $this->sub_admin = $sub_admin;
        $this->password = $password;
        $this->sub_admin_id = $sub_admin_id;
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
        ->greeting('Hello' . " " .$this->sub_admin->name . ". " . " ". "your ID is" . " " . $this->sub_admin_id)
        ->line(  'Below is your account details to gain access to bellewise.') 
        ->line( 'Password:' .' ' . $this->password)
        ->line( 'Email:' .' ' . $this->sub_admin->email)
        ->action('Visit ', url('/') . ' ' . 'to gain access' )
        ->line('Thanks for using our application!');
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
        $id = $this->sub_admin_id;
        $email = $this->sub_admin->email;
        $name = $this->sub_admin->name;
        $message = 'Hi' . ' ' .$name . ' ' . 'here are your details to gain access to Bellewise' . ' ' . 'Email:' .$email . ' ' . 'Password:' .$password . ' ' . 'ID:' .$id .' '. 'Regards, Bellewise';
        return (new NexmoMessage)
        ->content($message);
    }


    }
