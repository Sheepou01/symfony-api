<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191109160619 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        //$this->addSql('DROP TABLE answers');
        //$this->addSql('DROP TABLE questions');
        //$this->addSql('DROP TABLE quizzes');
        //$this->addSql('ALTER TABLE wiki ADD author_id INT DEFAULT NULL, ADD source VARCHAR(255) DEFAULT NULL, ADD image VARCHAR(255) DEFAULT NULL');
        //$this->addSql('ALTER TABLE wiki ADD CONSTRAINT FK_22CDDC06F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        //$this->addSql('CREATE INDEX IDX_22CDDC06F675F31B ON wiki (author_id)');
        //$this->addSql('ALTER TABLE question DROP title');
        //$this->addSql('ALTER TABLE quizz ADD author_id INT DEFAULT NULL, ADD online TINYINT(1) DEFAULT \'1\' NOT NULL');
        //$this->addSql('ALTER TABLE quizz ADD CONSTRAINT FK_7C77973DF675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        //$this->addSql('CREATE INDEX IDX_7C77973DF675F31B ON quizz (author_id)');
        $this->addSql('ALTER TABLE game ADD online TINYINT(1) DEFAULT \'1\' NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE answers (id INT UNSIGNED AUTO_INCREMENT NOT NULL, description VARCHAR(255) NOT NULL COLLATE utf8mb4_general_ci, status TINYINT(1) DEFAULT \'0\' NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at DATETIME DEFAULT NULL, questions_id INT UNSIGNED NOT NULL, INDEX fk_answers_questions1_idx (questions_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE questions (id INT UNSIGNED AUTO_INCREMENT NOT NULL, question VARCHAR(255) NOT NULL COLLATE utf8mb4_general_ci, anecdote TEXT DEFAULT NULL COLLATE utf8mb4_general_ci, wiki VARCHAR(64) DEFAULT NULL COLLATE utf8mb4_general_ci, status TINYINT(1) DEFAULT \'0\' NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at DATETIME DEFAULT NULL, levels_id INT UNSIGNED NOT NULL, answers_id INT UNSIGNED NOT NULL, quizzes_id INT UNSIGNED NOT NULL, INDEX fk_questions_levels_idx (levels_id), INDEX fk_questions_quizzes1_idx (quizzes_id), INDEX fk_questions_answers1_idx (answers_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE quizzes (id INT UNSIGNED AUTO_INCREMENT NOT NULL, title VARCHAR(64) NOT NULL COLLATE utf8mb4_general_ci, description VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_general_ci, status TINYINT(1) DEFAULT \'0\' NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at DATETIME DEFAULT NULL, app_users_id INT UNSIGNED NOT NULL, INDEX fk_quizzes_app_users1_idx (app_users_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE game DROP online');
        $this->addSql('ALTER TABLE question ADD title VARCHAR(75) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE quizz DROP FOREIGN KEY FK_7C77973DF675F31B');
        $this->addSql('DROP INDEX IDX_7C77973DF675F31B ON quizz');
        $this->addSql('ALTER TABLE quizz DROP author_id, DROP online');
        $this->addSql('ALTER TABLE wiki DROP FOREIGN KEY FK_22CDDC06F675F31B');
        $this->addSql('DROP INDEX IDX_22CDDC06F675F31B ON wiki');
        $this->addSql('ALTER TABLE wiki DROP author_id, DROP online, DROP source, DROP image');
    }
}
