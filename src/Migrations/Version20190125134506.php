<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190125134506 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        //$this->addSql('ALTER TABLE wiki ADD online TINYINT(1) NOT NULL');
        //$this->addSql('ALTER TABLE game ADD online TINYINT(1) DEFAULT \'1\' NOT NULL');
        //$this->addSql('ALTER TABLE quizz ADD online TINYINT(1) DEFAULT \'1\' NOT NULL');
        //$this->addSql('ALTER TABLE user DROP is_active');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game CHANGE online online TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE quizz CHANGE online online TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE user ADD is_active TINYINT(1) DEFAULT \'1\' NOT NULL');
        $this->addSql('ALTER TABLE wiki DROP online, CHANGE source source VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
