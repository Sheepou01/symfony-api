<?php

namespace App\Controller;


use App\Entity\Game;
use App\Entity\User;
use App\Entity\Quizz;
use App\Repository\GameScoreRepository;
use App\Repository\QuizzScoreRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;


class FOSScoreController extends FOSRestController{
    /**
     * @GET(
     *  path="/api/lastest_scores/{user_id}/game/{game_id}",
     * name="lastest_game_score",
     * )
     * @ParamConverter("user", options={"mapping": {"user_id": "id"}})
     * @ParamConverter("game", options={"mapping": {"game_id": "id"}})
     * @View
     */
    public function getLastestGameScores(User $user, Game $game, GameScoreRepository $gameScoreRepo){
        
        $lastestScores = $gameScoreRepo->findLastestScores($user, $game);
        
        return $lastestScores;
        
    }

    /**
     * @GET(
     *  path="/api/lastest_scores/{user_id}/quizz/{quizz_id}",
     * name="lastest_quizz_score",
     * )
     * @ParamConverter("user", options={"mapping": {"user_id": "id"}})
     * @ParamConverter("quizz", options={"mapping": {"quizz_id": "id"}})
     * @View
     */
    public function getLastestQuizzScores(User $user, Quizz $quizz, QuizzScoreRepository $quizzScoreRepo){
        
        $lastestScores = $quizzScoreRepo->findLastestScores($user, $quizz);
        
        return $lastestScores;
        
    }

    /**
     * @GET(
     *  path="/api/best_scores/game/{id}",
     * name="best_game_score",
     * )
     * @View
     */
    public function bestGameScores(Game $game, GameScoreRepository $gameScoreRepo) {

        $bestScores = $gameScoreRepo->findBestGameScores($game);

        return $bestScores;
    }

     /**
     * @GET(
     *  path="/api/best_scores/quizz/{id}",
     * name="best_quizz_score",
     * )
     * @View
     */
    public function bestQuizzScores(Quizz $quizz, QuizzScoreRepository $quizzScoreRepo) {

        $bestScores = $quizzScoreRepo->findBestQuizzScores($quizz);

        return $bestScores;
    }


    
    
}