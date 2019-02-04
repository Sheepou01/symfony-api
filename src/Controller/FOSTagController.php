<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Repository\TagRepository;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;


class FOSTagController extends FOSRestController
{
     /**
     * @GET(
     *  path="/api/tags",
     * name="show_all_tags",
     * )
     * @View
     */
    public function showTags(TagRepository $tagRepo)
    {
        $tags = $tagRepo->getTagsName();

        return $tags;
    }
}
