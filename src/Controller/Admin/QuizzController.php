<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\QuizzRepository;

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
}
