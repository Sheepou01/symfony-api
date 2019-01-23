<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\DateTime;
use App\Repository\RoleRepository;


class FOSUserController extends FOSRestController{

    /**
     * @Rest\Post("/api/signup")
     * @Rest\View(StatusCode=201)
     * @ParamConverter("user", converter="fos_rest.request_body")
     */

    public function signup(User $user, RoleRepository $role){
        $roleUser = $role->findOneBy(['code' => 'ROLE_USER']);
        $em = $this->getDoctrine()->getManager();
        $user->setCreatedAt(new \DateTime);
        $user->setRole($roleUser);
        $em->persist($user);
        $em->flush();
        return $user;
    }
}