import {GridItem, HStack} from "@chakra-ui/react";
import {formatCurrency} from "../../utils/format-currency.ts";
interface SummaryItemsProps {
    title: string;
    price: number;
    bgColor: string;
}
export default function SummaryItem({title, price, bgColor}: SummaryItemsProps) {
    return (
        <GridItem w='100%' h='20' rounded='4' bg={bgColor}>
            <HStack justifyContent='space-between' alignItems='center' height='100%' px='2'>
                <p>{title}</p>
                <strong>{formatCurrency(Number(price))}</strong>
            </HStack>
        </GridItem>
    )
}