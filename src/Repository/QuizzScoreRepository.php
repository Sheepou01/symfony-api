<?php

namespace App\Repository;

use App\Entity\QuizzScore;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method QuizzScore|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzScore|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzScore[]    findAll()
 * @method QuizzScore[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzScoreRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, QuizzScore::class);
    }

    // /**
    //  * @return QuizzScore[] Returns an array of QuizzScore objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?QuizzScore
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}