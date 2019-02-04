<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Annotation as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     * @ParamConverter("user", converter="fos_rest.request_body")
     */
    public function edit(User $user, UserRepository $repoUser, UserPasswordEncoderInterface $encoder, $id): Response
    {
        $userBDD = $repoUser->findOneBy(['id' => $id]);
        $id = $userBDD->getId();
        $role = $userBDD->getRole();
        $createdAt = $userBDD->getCreatedAt();
        // dd($createdAt);
        $em = $this->getDoctrine()->getManager();
        $userBDD->setUpdatedAt(new \DateTime);
        if($user->getPassword() == !null){
            $hash = $encoder->encodePassword($user,$user->getPassword());
            $userBDD->setPassword($hash);
        }
        if($user->getEmail() == !null){
            $userBDD->setEmail($user->getEmail());
        }
        if($user->getUsername() == !null){
            $userBDD->setUsername($user->getUsername());
        }
        $userBDD->setId($id);
        $userBDD->setRole($role);
        
        $em->persist($userBDD);
        $em->flush();
        return new Response('Maj Ok');
    }

    //  /**
    //  * @Rest\Post("/api/signup")
    //  * @Rest\View(StatusCode=201)
    //  * @ParamConverter("user", converter="fos_rest.request_body")
    //  */

    // public function signup(User $user, RoleRepository $role, UserPasswordEncoderInterface $encoder){
    //     $roleUser = $role->findOneBy(['code' => 'ROLE_USER']);
    //     $em = $this->getDoctrine()->getManager();
    //     $user->setCreatedAt(new \DateTime);
    //     // dd($user->getPassword());
    //     $hash = $encoder->encodePassword($user,$user->getPassword());
    //     $user->setPassword($hash);
    //     $user->setRole($roleUser);
    //     $em->persist($user);
    //     $em->flush();
    //     return new Response('Inscription effectuée');
    // }
}
