<?php

namespace App\Controller;

use App\Entity\Wiki;
use App\Controller\FOSWikiController;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\WikiRepository;


class FOSWikiController extends AbstractController{

    /**
     * @GET(
     *  path="/api/wiki/{id}",
     * name="show_wiki",
     * requirements = {"id"="\d+"}
     * )
     * @View
     */
    public function show(Wiki $wiki){
        return $wiki;
    }

    /**
     * @GET(
     *  path="/api/wiki",
     * name="show_all_wiki",
     * )
     * @View
     */
    public function showAll(WikiRepository $wikiRepository){
        $wikis = $wikiRepository->findAll();
        return $wikis;
    }
}