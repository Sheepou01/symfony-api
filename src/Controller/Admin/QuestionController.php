<?php

namespace App\Controller\Admin;

use App\Entity\Quizz;
use App\Entity\Question;
use App\Form\QuestionType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class QuestionController extends AbstractController
{

    /**
     * @Route("/admin/quizz/{id}/question/new", name="admin_question_new")
     */
    public function new(Quizz $quizz, EntityManagerInterface $em)
    {
    
    }

    /**
     * @Route("/admin/quizz/{quizz_id}/question/{question_id}/edit", name="admin_question_edit")
     * @ParamConverter("quizz", options={"mapping": {"quizz_id": "id"}})
     * @ParamConverter("question", options={"mapping": {"question_id": "id"}})
     */
    public function edit(Quizz $quizz, Question $question, EntityManagerInterface $em, Request $request)
    {
        $question->setUpdatedAt(new \DateTime());
        
        $form = $this->createForm(QuestionType::class, $question);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            
            $em->flush();

            return $this->redirectToRoute('admin_quizz_edit', [
                'id' => $quizz->getId()
            ]);
        }

        return$this->render('admin/question/edit.html.twig', [
            'quizz' => $quizz,
            'question' => $question,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/quizz/{quizz_id}/question/{question_id}/delete", name="admin_question_delete")
     * @ParamConverter("quizz", options={"mapping": {"quizz_id": "id"}})
     * @ParamConverter("question", options={"mapping": {"question_id": "id"}})
     */
    public function delete(Quizz $quizz, Question $question, EntityManagerInterface $em)
    {

    }

}

