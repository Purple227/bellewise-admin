<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\NexmoMessage;

class RestaurantCredentials extends Notification implements ShouldQueue
{
    use Queueable;


    public $restaurant
    public $password 


    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($restaurant, $password)
    {
        $this->restaurant = $restaurant;
        $this->password = $password;
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
        ->subject('Bellewise')
        ->greeting( $this->restaurant->restaurant_name)
        ->line(  'You decide to partner with bellewise.') 
        ->action('Get the app', url('/') )
        ->line('Thank you for partnering with us!'); 
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


    public function toNexmo($notifiable)
    {

        $message = 'Thanks for joining bellewise';
        return (new NexmoMessage)
        ->content($message);
    }


}
