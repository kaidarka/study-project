import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ArticleType } from '@/entities/Article';
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tab';
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tab';
import { ToggleFeatures } from '@/shared/lib/features';

type ArticleTypeTabsProps = {
    className?: string;
    value: ArticleType;
    onTabClick: (tab: TabItem['value']) => void;
};

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onTabClick } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
        ],
        [t]
    );
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Tabs
                    className={className}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    direction="column"
                />
            }
            off={
                <TabsDeprecated
                    className={className}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    );
};
