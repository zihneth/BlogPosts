<?php

declare(strict_types=1);

namespace BlogPosts\Core\Content\Posts;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void               add(MSBlogsEntity $entity)
 * @method void               set(string $key, MSBlogsEntity $entity)
 * @method MSBlogsEntity[]    getIterator()
 * @method MSBlogsEntity[]    getElements()
 * @method MSBlogsEntity|null get(string $key)
 * @method MSBlogsEntity|null first()
 * @method MSBlogsEntity|null last()
 */
class PostsCollection extends EntityCollection
{
    public function getExpectedClass(): string
    {
        return PostsEntity::class;
    }
}