<?php

namespace App\Controller;

use App\Entity\Wiki;
use App\Controller\FOSWikiController;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\View;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


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
}