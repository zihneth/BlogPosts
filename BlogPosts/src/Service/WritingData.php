<?php declare(strict_types=1);

namespace BlogPosts\Service;

use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Defaults;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Uuid\Uuid;

class WritingData
{
    /**
     * @var EntityRepositoryInterface
     */
    private $postsRepository;


    public function __construct(EntityRepositoryInterface $postsRepository)
    {
        $this->postsRepository = $postsRepository;
    }
    
    public function writeData(Context $context): void
    {
        $context = Context::createDefaultContext();

        $productId = Uuid::randomHex();
    
        $this->productRepository->create([
            [
                'id' => $productId,
                'name' => 'Example product',
                'active' => 1,
                'description' => 'test desc',
                'taxId' => $this->getTaxId($context)
            ]
        ], $context);
    }
}