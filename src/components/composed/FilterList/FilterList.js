import React from "react";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {
	StyledContainer,
	StyledLabel,
	StyledCheckbox,
	StyledFiltros,
	StyledContainerInputs,
	StyledContainerCheckbox,
} from "./FilterList.styles";

function FilterList(props) {
	const handleChange = (e) => {
		const {name, type, checked, value} = e.target;
		let newFilters = {
			...props.filters,
			[name]: type === "checkbox" ? checked : value,
		};
		props.onChange(newFilters);
	};

	return (
		<StyledContainer>
			<StyledFiltros>Filtros</StyledFiltros>
			<StyledLabel>Precio</StyledLabel>
			<StyledContainerInputs>
				<InputNumber
					name="priceMin"
					type="number"
					value={props.filters.priceMin}
					onChange={handleChange}
					placeholder="Mín"
					className="styleFilterList styleFilter"
				/>
				<InputNumber
					name="priceMax"
					type="number"
					value={props.filters.priceMax}
					onChange={handleChange}
					placeholder="Máx"
					className="styleFilterList"
				/>
			</StyledContainerInputs>
			<StyledLabel>Tamaño</StyledLabel>
			<StyledContainerInputs>
				<InputNumber
					name="sizeMin"
					type="number"
					value={props.filters.sizeMin}
					onChange={handleChange}
					placeholder="Mín"
					className="styleFilterList styleFilter"
				/>
				<InputNumber
					name="sizeMax"
					type="number"
					value={props.filters.sizeMax}
					onChange={handleChange}
					placeholder="Máx"
					className="styleFilterList"
				/>
			</StyledContainerInputs>
			<StyledContainerCheckbox>
				<StyledCheckbox
					type="checkbox"
					id="check"
					checked={props.filters.billsIncluded}
					onChange={handleChange}
					name="billsIncluded"
				/>
				<StyledLabel>Gastos incluidos</StyledLabel>
			</StyledContainerCheckbox>
			<Button
				buttonStyles={{width: "7.25rem", height: "2.125rem", marginTop: "2rem"}}
				text="Enviar"
				type="normal"
				className="blueGradient"
			/>
		</StyledContainer>
	);
}

export default FilterList;