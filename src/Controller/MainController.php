<?php

namespace App\Controller;

use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Rest\GET("/", name="main")
     */
    public function index()
    {
        $user = $this->getUser();
        dd($user);
        
    }
}
