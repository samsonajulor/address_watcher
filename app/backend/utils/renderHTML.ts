import { transaction, valueTx, interaction } from './htmls.ts';
import { DecodeData, Txns } from './types.ts';

const renderHTML = (value: string, others: DecodeData, tx: Txns) => {
  if (!others || others == null) {
    return valueTx(value, tx);
  }
  if (others.header === 'ERC20') {
    return transaction(value, others, tx);
  }

  if (others.header === 'ERC721') {
    return `<div>
      <h4>${value}</h4>
      <p>NFT Interaction</p>
      <p>${others.name}</p>
      <div>
        ${others.params
          ?.map((item: any) => {
            return `<p>${item}</p>`;
          })
          .join('')}
      </div>
    </div>`;
  }

  if (others.header === 'Unknown') {
    return interaction(value, others, tx);
  }

  return '';
};

export default renderHTML;
