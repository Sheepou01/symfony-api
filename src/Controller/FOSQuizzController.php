<?php
namespace App\Controller;

use App\Entity\Quizz;
use App\Repository\QuizzRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use App\Repository\AnswerRepository;

class FOSQuizzController extends FOSRestController{
    /**
     * @GET(
     *  path="/api/quizz",
     * name="show_quizz",
     * )
     * @View
     */
    public function showQuizz(QuizzRepository $quizzRepository, AnswerRepository $answerRepo){
        
        $quizz = $quizzRepository->findBy([
            'online' => true
        ]);

        $quizzToSend = $quizz[array_rand($quizz)];
        
        $questions = $quizzToSend->getQuestions();

        $allAnswers = [];
        foreach($questions as $question) {
            $answers = $answerRepo->findBy([
                'question' => $question->getId()
            ], [
                'text' => 'ASC'
            ]);

           $allAnswers[$question->getText()] = $answers;
        }
        
         return [$quizzToSend, $allAnswers];

        
    }
}