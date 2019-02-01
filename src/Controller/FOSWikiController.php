<?php

namespace App\Controller;

use App\Entity\Wiki;
use App\Repository\WikiRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\AbstractFOSRestController;


class FOSWikiController extends AbstractFOSRestController{
    /**
     * @GET(
     *  path="/api/wiki",
     * name="show_all_wiki",
     * )
     * @View
     */
    public function showAll(WikiRepository $wikiRepository){
        
        $wikis = $wikiRepository->findBy([
            'online' => true]);
        return $wikis;
    }
}