<?php

namespace App\Controller\Admin;

use App\Entity\Answer;
use App\Entity\Question;
use App\Form\AnswerType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class AnswerController extends AbstractController
{
    


    /**
     * @Route("/admin/question/{id}/answer/new", name="admin_answer_new")
     */
    public function new(Question $question, EntityManagerInterface $em)
    {
    
    }

    /**
     * @Route("/admin/question/{question_id}/answer/{answer_id}/edit", name="admin_answer_edit")
     * @ParamConverter("question", options={"mapping": {"question_id": "id"}})
     * @ParamConverter("answer", options={"mapping": {"answer_id": "id"}})
     */
    public function edit(Question $question, Answer $answer, EntityManagerInterface $em, Request $request)
    {

        $answer->setUpdatedAt(new \DateTime());

        $form = $this->createForm(AnswerType::class, $answer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em->flush();

            return $this->redirectToRoute('admin_question_edit', [
                'id' => $question->getId()
            ]);
        }

        return $this->render('admin/answer/edit.html.twig', [
            'question' => $question,
            'answer' => $answer,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/admin/question/{question_id}/answer/{answer_id}/delete", name="admin_answer_delete")
     * @ParamConverter("question", options={"mapping": {"question_id": "id"}})
     * @ParamConverter("answer", options={"mapping": {"answer_id": "id"}})
     */
    public function delete(Question $question, Answer $answer, EntityManagerInterface $em)
    {

    }

}
