<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzRepository")
 */
class Quizz
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $title;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzScore", mappedBy="quizz")
     */
    private $quizzScores;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Question", mappedBy="quizz")
     */
    private $questions;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Tag", mappedBy="quizz")
     */
    private $tags;

    public function __construct()
    {
        $this->quizzScores = new ArrayCollection();
        $this->questions = new ArrayCollection();
        $this->tags = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|QuizzScore[]
     */
    public function getQuizzScores(): Collection
    {
        return $this->quizzScores;
    }

    public function addQuizzScore(QuizzScore $quizzScore): self
    {
        if (!$this->quizzScores->contains($quizzScore)) {
            $this->quizzScores[] = $quizzScore;
            $quizzScore->setQuizz($this);
        }

        return $this;
    }

    public function removeQuizzScore(QuizzScore $quizzScore): self
    {
        if ($this->quizzScores->contains($quizzScore)) {
            $this->quizzScores->removeElement($quizzScore);
            // set the owning side to null (unless already changed)
            if ($quizzScore->getQuizz() === $this) {
                $quizzScore->setQuizz(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Question[]
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions[] = $question;
            $question->setQuizz($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->contains($question)) {
            $this->questions->removeElement($question);
            // set the owning side to null (unless already changed)
            if ($question->getQuizz() === $this) {
                $question->setQuizz(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->addQuizz($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
            $tag->removeQuizz($this);
        }

        return $this;
    }
}
