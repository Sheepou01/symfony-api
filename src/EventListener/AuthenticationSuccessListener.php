<?php

namespace App\EventListener;


use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use App\Repository\QuizzScoreRepository;
use App\Entity\QuizzScore;

class AuthenticationSuccessListener {

    /**
     * @var quizzScoreRepo
     */
    private $quizzScoreRepo;

public function __construct(QuizzScoreRepository $quizzScoreRepo) {
    $this->quizzScoreRepo = $quizzScoreRepo;
}

/**
 * @param AuthenticationSuccessEvent $event
 * @param QuizzScoreRepository $quizzScoreRepo
 */
public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
{
    $data = $event->getData();
    $user = $event->getUser();

    if (!$user instanceof UserInterface) {
        return;
    }

    $data['data'] = array(
        'quizzScores' => $this->quizzScoreRepo->findLastestScoresFromUser($user),
    );

    $event->setData($data);
}
}
