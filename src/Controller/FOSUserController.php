<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\DateTime;

class FOSUserController extends FOSRestController{

    /**
     * @Rest\Post("/api/signup")
     * @Rest\View
     * @ParamConverter("user", converter="fos_rest.request_body")
     */

    public function signup(User $user){

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();
        return new Response($user);
    }
}