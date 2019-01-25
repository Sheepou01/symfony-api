<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Form\TagType;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    /**
     * @Route("/admin/tag/{id}/edit", name="admin_tag_edit")
     */
    public function edit(Tag $tag, Request $request, EntityManagerInterface $em)
    {
        $tag->setUpdatedAt(new \DateTime());

        $form = $this->createForm(TagType::class, $tag);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->persist($tag);
            $em->flush();

            return $this->redirectToRoute('admin_tag_index');
        }

        return $this->render('admin/tag/edit.html.twig', [
            'form' => $form->createView(),
            'tag' => $tag
        ]);
    }

     /**
     * @Route("/admin/tag/{id}/delete", name="admin_tag_delete")
     */
    public function delete(Tag $tag, EntityManagerInterface $em, Request $request)
    {
       
            
            $em->remove($tag);
            $em->flush();
        

        return $this->redirectToRoute('admin_tag_index');
        
    }

}
