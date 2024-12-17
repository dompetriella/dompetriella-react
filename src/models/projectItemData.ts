import React from "react";

type ProjectItemDataProps = {
	title: string;
	subtitle: string;
	imagePath: string;
	status?: string | null;
	information?: string | null;
	sourceCodeLink?: string | null;
	codeLang?: string | null;
	additionalContent?: React.ReactNode | null;
};

export class ProjectItemData {
	title: string;
	subtitle: string;
	imagePath: string;
	status: string | null;
	information: string | null;
	sourceCodeLink: string | null;
	codeLang: string | null;
	additionalContent: React.ReactNode | null;

	constructor({
		title,
		subtitle,
		imagePath,
		status = null,
		information = null,
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
