<?php
namespace App\Controller;

use App\Entity\User;
use App\Entity\Quizz;
use App\Repository\TagRepository;
use App\Repository\UserRepository;
use App\Repository\QuizzRepository;
use App\Repository\AnswerRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
<<<<<<< HEAD
use App\Repository\AnswerRepository;
=======
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

>>>>>>> Guiz

class FOSQuizzController extends FOSRestController{
    /**
     * @GET(
     * path="/api/quizz",
     * name="show_quizz",
     * )
     * @View
     * @ParamConverter("user", converter="fos_rest.request_body")
     */
<<<<<<< HEAD
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
            ]);

            shuffle($answers);
           $allAnswers[$question->getText()] = $answers;
        }
        
         return [$quizzToSend, $allAnswers];

=======
    public function showQuizz(User $user = null, QuizzRepository $quizzRepository, AnswerRepository $answerRepo, UserRepository $userRepo, TagRepository $tagRepo){
        if($user != null){
            $registeredUser = $userRepo->findOneBy([
                'id' => $user->getId()
            ]);
        
            if ($registeredUser != null && !empty($registeredUser->getFavoriteTag())) {
                
                $currentId = $registeredUser->getId();
                $quizz = $quizzRepository->findQuizByTags($currentId);
                return $quizz;
            }
        }else{
        
        $quizz = $quizzRepository->findBy([
            'online' => true
        ]);

        $quizzToSend = $quizz[array_rand($quizz)];
>>>>>>> Guiz
        
        return new Response('coucou');
        }
    }
}