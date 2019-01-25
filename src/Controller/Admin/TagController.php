<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\TagRepository;

class TagController extends AbstractController
{
    /**
     * @Route("/admin/tag", name="admin_tag_index")
     */
    public function index(TagRepository $tagRepo)
    {
        $tags = $tagRepo->findAll();

        return $this->render('admin/tag/index.html.twig', [
            'tags' => $tags,
        ]);
    }
}
