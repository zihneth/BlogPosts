<?php declare(strict_types=1);

namespace BlogPosts\Core\Content\Posts;

use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\DateTimeField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\LongTextField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\AllowHtml;

class PostsDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'blog_posts';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new StringField('name', 'name'))->addFlags(new Required()),
            (new LongTextField('description', 'description'))->addFlags(new Required(), new AllowHtml()),
            (new BoolField('active', 'active')),
            (new DateTimeField('created_at', 'created_at')),
            (new DateTimeField('updated_at', 'updated_at')),
        ]);
    }
    
    public function getEntityClass(): string
    {
        return PostsEntity::class;
    }
    
    public function getCollectionClass(): string
    {
        return PostsCollection::class;
    }
}