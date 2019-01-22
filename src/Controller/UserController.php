<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/signup", name="signup")
     */
    public function signup(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $encodedPassword = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($encodedPassword);
            
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('user');
        }
    }

    /**
     * @Route("/signin", name="signin")
     */
    public function signin(Request $request, AuthenticationUtils $authUtils)
    {

        $error = $authUtils->getLastAuthenticationError();

        
         $lastUsername = $authUtils->getLastUsername();
        return $this->render('user/index.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error
        ]);
    }

}
