<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191109163421 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE wiki ADD author_id INT DEFAULT NULL, ADD source VARCHAR(255) DEFAULT NULL, ADD image VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE wiki ADD CONSTRAINT FK_22CDDC06F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_22CDDC06F675F31B ON wiki (author_id)');
        $this->addSql('ALTER TABLE quizz ADD author_id INT DEFAULT NULL, ADD online TINYINT(1) DEFAULT \'1\' NOT NULL');
        $this->addSql('ALTER TABLE quizz ADD CONSTRAINT FK_7C77973DF675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_7C77973DF675F31B ON quizz (author_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE quizz DROP FOREIGN KEY FK_7C77973DF675F31B');
        $this->addSql('DROP INDEX IDX_7C77973DF675F31B ON quizz');
        $this->addSql('ALTER TABLE quizz DROP author_id, DROP online');
        $this->addSql('ALTER TABLE wiki DROP FOREIGN KEY FK_22CDDC06F675F31B');
        $this->addSql('DROP INDEX IDX_22CDDC06F675F31B ON wiki');
        $this->addSql('ALTER TABLE wiki DROP author_id, DROP source, DROP image');
    }
}
