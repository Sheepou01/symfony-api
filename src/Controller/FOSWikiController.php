<?php

namespace App\Controller;

use App\Entity\Wiki;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\View;
use App\Repository\WikiRepository;
use FOS\RestBundle\Controller\FOSRestController;


class FOSWikiController extends FOSRestController{

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