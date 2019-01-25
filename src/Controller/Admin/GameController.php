<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\GameRepository;

class GameController extends AbstractController
{
    /**
     * @Route("/admin/game", name="admin_game_index")
     */
    public function index(GameRepository $gameRepo)
    {
        $games = $gameRepo->findAll();

        return $this->render('admin/game/index.html.twig', [
            'games' => $games,
        ]);
    }
}
