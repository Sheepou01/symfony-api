<?php
namespace App\Controller;

use App\Entity\Quizz;
use App\Repository\QuizzRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;

class FOSQuizzController extends FOSRestController{
    /**
     * @GET(
     *  path="/api/quizz",
     * name="show_quizz",
     * )
     * @View
     */
    public function showQuizz(QuizzRepository $quizzRepository){
        
        $quizz = $quizzRepository->findAll();
        
        return $quizz[array_rand($quizz)];
        
    }
}