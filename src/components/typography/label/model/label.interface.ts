import {ReactElement} from 'react';

export enum ETypographyVariant {
  SMALL_REGULAR_POPPINS = 'labelPoppinsSmallRegular',
  SMALL_MEDIUM_POPPINS = 'labelPoppinsSmallMedium',
  SMALL_SEMIBOLD_POPPINS = 'labelPoppinsSmallSemiBold',

  MEDIUM_REGULAR_POPPINS = 'labelPoppinsMediumRegular',
  MEDIUM_MEDIUM_POPPINS = 'labelPoppinsMediumMedium',
  MEDIUM_SEMIBOLD_POPPINS = 'labelPoppinsMediumSemiBold',

  LARGE_REGULAR_POPPINS = 'labelPoppinsLargeRegular',
  LARGE_MEDIUM_POPPINS = 'labelPoppinsLargeMedium',
  LARGE_SEMIBOLD_POPPINS = 'labelPoppinsLargeSemiBold',

  PARAGRAPH_SMALL_REGULAR_POPPINS = 'paragraphSmallRegularPoppins',
  PARAGRAPH_SMALL_MEDIUM_POPPINS = 'paragraphSmallMediumPoppins',

  PARAGRAPH_MEDIUM_REGULAR_POPPINS = 'paragraphMediumRegularPoppins',
  PARAGRAPH_MEDIUM_MEDIUM_POPPINS = 'paragraphMediumMediumPoppins',

  PARAGRAPH_LARGE_REGULAR_POPPINS = 'paragraphLargeRegularPoppins',
  PARAGRAPH_LARGE_MEDIUM_POPPINS = 'paragraphLargeMediumPoppins',

  HEADER_H1 = 'headerH1',
  HEADER_H2 = 'headerH2',
  HEADER_H3 = 'headerH3',
  HEADER_H4 = 'headerH4',
}

export interface ILabel {
  numberOfLines?: number;
  color?: string;
  variant: ETypographyVariant;
  children:
    | string
    | number
    | string[]
    | ReactElement
    | ReactElement[]
    | undefined;
  maxLength?: number;
  componentStyleSheet?: Record<string, unknown>;
}

export interface ILabelTemplate {
  templateModal: ILabel;
  componentStyleSheet: Record<string, unknown>;
}
