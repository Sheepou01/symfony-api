<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    /**
     * @Route("/admin/user", name="admin_user_index")
     */
    public function index(UserRepository $userRepo)
    {
        $users = $userRepo->findAll();

        return $this->render('admin/user/index.html.twig', [
            'users' => $users,
        ]);
    }

     /**
     * @Route("/admin/user/{id}/edit", name="admin_user_edit")
     */
    public function edit(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        
    }

     /**
     * @Route("/admin/user/{id}/delete", name="admin_user_delete")
     */
    public function delete(User $user, EntityManagerInterface $em, Request $request)
    {
       
            
            $em->remove($user);
            $em->flush();
        

        return $this->redirectToRoute('admin_user_index');
        
    }
    

}
