<?php

namespace App\Controller\Admin;

use App\Entity\Game;
use App\Form\GameType;
use App\Repository\GameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    /**
     * @Route("/admin/game/{id}/edit", name="admin_game_edit")
     */
    public function edit(Game $game, Request $request, EntityManagerInterface $em)
    {
        $game->setUpdatedAt(new \DateTime());

        $form = $this->createForm(GameType::class, $game);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->persist($game);
            $em->flush();

            return $this->redirectToRoute('admin_game_index');
        }

        return $this->render('admin/game/edit.html.twig', [
            'form' => $form->createView(),
            'game' => $game
        ]);
    }

     /**
     * @Route("/admin/game/{id}/delete", name="admin_game_delete")
     */
    public function delete(Game $game, EntityManagerInterface $em, Request $request)
    {
       
            
            $em->remove($game);
            $em->flush();
        

        return $this->redirectToRoute('admin_game_index');
        
    }

}
