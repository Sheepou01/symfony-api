<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\GameScore", mappedBy="game")
     */
    private $gameScores;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Help", cascade={"persist", "remove"})
     */
    private $help;

    public function __construct()
    {
        $this->gameScores = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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
     * @return Collection|GameScore[]
     */
    public function getGameScores(): Collection
    {
        return $this->gameScores;
    }

    public function addGameScore(GameScore $gameScore): self
    {
        if (!$this->gameScores->contains($gameScore)) {
            $this->gameScores[] = $gameScore;
            $gameScore->setGame($this);
        }

        return $this;
    }

    public function removeGameScore(GameScore $gameScore): self
    {
        if ($this->gameScores->contains($gameScore)) {
            $this->gameScores->removeElement($gameScore);
            // set the owning side to null (unless already changed)
            if ($gameScore->getGame() === $this) {
                $gameScore->setGame(null);
            }
        }

        return $this;
    }

    public function getHelp(): ?Help
    {
        return $this->help;
    }

    public function setHelp(?Help $help): self
    {
        $this->help = $help;

        return $this;
    }
}
