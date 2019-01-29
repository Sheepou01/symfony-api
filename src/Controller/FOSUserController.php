<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\RoleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Validator\Constraints\DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class FOSUserController extends FOSRestController{

    /**
     * @Rest\Post("/api/signup")
     * @Rest\View(StatusCode=201)
     * @ParamConverter("user", converter="fos_rest.request_body")
     */

    public function signup(User $user, RoleRepository $role, UserPasswordEncoderInterface $encoder){

       

        $roleUser = $role->findOneBy(['code' => 'ROLE_USER']);
        $em = $this->getDoctrine()->getManager();
        $user->setCreatedAt(new \DateTime);
        // dd($user->getPassword());
        $hash = $encoder->encodePassword($user,$user->getPassword());
        $user->setPassword($hash);
        $user->setRole($roleUser);
        $em->persist($user);
        $em->flush();
        return new Response('Inscription effectuée');
    }

    /**
      * @Rest\Post("/api/signin")
      * @Rest\View(StatusCode=202)
      * @Rest\Get("/api/signin")
      */
     public function signin(AuthenticationUtils $authenticationUtils, Request $request){
          // get the login error if there is one
         
         
          $error = $authenticationUtils->getLastAuthenticationError();
          // last username entered by the user
          $lastUsername = $authenticationUtils->getLastUsername();
         
          return new Response('Connexion effectuée');
     }
}