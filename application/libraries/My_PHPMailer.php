<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class My_PHPMailer {
    function __construct()
    {
        require_once('phpmailer/PHPMailerAutoload.php');
    }
}