import React from "react";

type ProjectItemDataProps = {
	title: string;
	subtitle: string;
	imagePath: string;
	information: string;
	status?: string | null;
	sourceCodeLink?: string | null;
	codeLang?: string | null;
	additionalContent?: React.ReactNode | null;
};

export class ProjectItemData {
	title: string;
	subtitle: string;
	imagePath: string;
	information: string;
	status: string | null;
	sourceCodeLink: string | null;
	codeLang: string | null;
	additionalContent: React.ReactNode | null;

	constructor({
		title,
		subtitle,
		imagePath,
		information,
		status = null,
		sourceCodeLink = null,
		codeLang = null,
		additionalContent = null,
	}: ProjectItemDataProps) {
		this.title = title;
		this.subtitle = subtitle;
		this.imagePath = imagePath;
		this.status = status;
		this.information = information;
		this.sourceCodeLink = sourceCodeLink;
		this.codeLang = codeLang;
		this.additionalContent = additionalContent;
	}
}
