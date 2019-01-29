<?php

namespace App\Controller\Admin;

use App\Entity\Quizz;
use App\Form\QuizzType;
use App\Repository\QuizzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuizzController extends AbstractController
{
    /**
     * @Route("/admin/quizz", name="admin_quizz_index")
     */
    public function index(QuizzRepository $quizzRepo)
    {
        $quizzes = $quizzRepo->findAll();

        return $this->render('admin/quizz/index.html.twig', [
            'quizzes'=> $quizzes
        ]);
    }


    /**
     * @Route("/admin/quizz/new", name="admin_quizz_new")
     */
    public function new(EntityManagerInterface $em, Request $request)
    {
        $quizz = new Quizz();
        $quizz->setCreatedAt(new \DateTime);

        $form = $this->createForm(QuizzType::class, $quizz);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->persist($quizz);
            $em->flush();

            return $this->redirectToRoute('admin_quizz_index');
        }


        return $this->render('admin/quizz/new.html.twig', [
            'form' => $form->createView(),
            'quizz' => $quizz
        ]);

    }

    /**
     * @Route("/admin/quizz/{id}/edit", name="admin_quizz_edit")
     */
    public function edit(Quizz $quizz, Request $request, EntityManagerInterface $em)
    {
        $quizz->setUpdatedAt(new \DateTime());

        $form = $this->createForm(QuizzType::class, $quizz);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->persist($quizz);
            $em->flush();

            return $this->redirectToRoute('admin_quizz_index');
        }

        return $this->render('admin/quizz/edit.html.twig', [
            'form' => $form->createView(),
            'quizz' => $quizz
        ]);
    }

     /**
     * @Route("/admin/quizz/{id}/delete", name="admin_quizz_delete")
     */
    public function delete(Quizz $quizz, EntityManagerInterface $em, Request $request)
    {
       
            
            $em->remove($quizz);
            $em->flush();
        

        return $this->redirectToRoute('admin_quizz_index');
        
    }

      /**
     * @Route("/admin/quizz/{id}/set_online_status", name="admin_quizz_online", methods={"GET", "POST"})
     */
    public function changeOnlineStatus(Quizz $quizz, EntityManagerInterface $em)
    {
        $quizz->setOnline(!$quizz->getOnline());

        $em->flush();

        return $this->redirectToRoute('admin_quizz_index');
    }

}
