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

    public $restaurant;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($restaurant)
    {
        $this->restaurant = $restaurant;
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
        ->subject('Partnership')
        ->greeting($this->restaurant->restaurant_name)
        ->line('Congratulation and welcome' . ' ' . $this->restaurant->restaurant_name . ' ' . ', Thanks for partnering with us.') 
        ->line('Regards Bellewise'); 
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

        $message = 'Congratulation and welcomee' . ' ' . $this->restaurant->restaurant_name . ' ' . ', Thanks for partnering with us. Regards Bellewise';
        return (new NexmoMessage)
        ->content($message);
    }


}
