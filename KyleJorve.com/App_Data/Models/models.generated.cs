//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.7.99
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

[assembly: PureLiveAssembly]
[assembly:ModelsBuilderAssembly(PureLive = true, SourceHash = "23c57fb25427e406")]
[assembly:System.Reflection.AssemblyVersion("0.0.0.1")]

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Master</summary>
	[PublishedContentModel("master")]
	public partial class Master : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "master";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Master(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Master, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Body Class: CSS class that is applied to the {body} tag
		///</summary>
		[ImplementPropertyType("bodyClass")]
		public string BodyClass
		{
			get { return this.GetPropertyValue<string>("bodyClass"); }
		}

		///<summary>
		/// Forwarding URL: Enter a URL to make this page a forwarding page.
		///</summary>
		[ImplementPropertyType("forwardingPg")]
		public string ForwardingPg
		{
			get { return this.GetPropertyValue<string>("forwardingPg"); }
		}

		///<summary>
		/// Head: Additional HTML to be inserted in the head
		///</summary>
		[ImplementPropertyType("head")]
		public string Head
		{
			get { return this.GetPropertyValue<string>("head"); }
		}

		///<summary>
		/// Hide Child Pages: Hide child pages from site's main navigation
		///</summary>
		[ImplementPropertyType("hideChildren")]
		public bool HideChildren
		{
			get { return this.GetPropertyValue<bool>("hideChildren"); }
		}

		///<summary>
		/// Hide in Sitemap: Excludes this document from the XML sitemap
		///</summary>
		[ImplementPropertyType("hideInSitemap")]
		public bool HideInSitemap
		{
			get { return this.GetPropertyValue<bool>("hideInSitemap"); }
		}

		///<summary>
		/// Meta Image: This will appear when a page is shared to social media sites.
		///</summary>
		[ImplementPropertyType("metaImage")]
		public IPublishedContent MetaImage
		{
			get { return this.GetPropertyValue<IPublishedContent>("metaImage"); }
		}

		///<summary>
		/// Meta Title: Page Name | Kyle Jorve | Illustration and Design
		///</summary>
		[ImplementPropertyType("metaTitle")]
		public string MetaTitle
		{
			get { return this.GetPropertyValue<string>("metaTitle"); }
		}

		///<summary>
		/// Hide in Main Navigation
		///</summary>
		[ImplementPropertyType("umbracoNaviHide")]
		public bool UmbracoNaviHide
		{
			get { return this.GetPropertyValue<bool>("umbracoNaviHide"); }
		}

		///<summary>
		/// SEO-Friendly URL
		///</summary>
		[ImplementPropertyType("umbracoUrlName")]
		public string UmbracoUrlName
		{
			get { return this.GetPropertyValue<string>("umbracoUrlName"); }
		}
	}

	/// <summary>Home</summary>
	[PublishedContentModel("home")]
	public partial class Home : Master
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "home";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Home(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Home, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Bio Background
		///</summary>
		[ImplementPropertyType("bioBg")]
		public IPublishedContent BioBg
		{
			get { return this.GetPropertyValue<IPublishedContent>("bioBg"); }
		}

		///<summary>
		/// Bio Content
		///</summary>
		[ImplementPropertyType("bioContent")]
		public IHtmlString BioContent
		{
			get { return this.GetPropertyValue<IHtmlString>("bioContent"); }
		}

		///<summary>
		/// Bio Heading: Appears in left nav in desktop view
		///</summary>
		[ImplementPropertyType("bioHeading")]
		public string BioHeading
		{
			get { return this.GetPropertyValue<string>("bioHeading"); }
		}

		///<summary>
		/// Commerce Icons
		///</summary>
		[ImplementPropertyType("commerceIcons")]
		public IEnumerable<IPublishedContent> CommerceIcons
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("commerceIcons"); }
		}

		///<summary>
		/// Copyright
		///</summary>
		[ImplementPropertyType("copyright")]
		public IHtmlString Copyright
		{
			get { return this.GetPropertyValue<IHtmlString>("copyright"); }
		}

		///<summary>
		/// Heading: Appears at bottom of hero
		///</summary>
		[ImplementPropertyType("heading")]
		public IHtmlString Heading
		{
			get { return this.GetPropertyValue<IHtmlString>("heading"); }
		}

		///<summary>
		/// Hero Background
		///</summary>
		[ImplementPropertyType("heroBg")]
		public IPublishedContent HeroBg
		{
			get { return this.GetPropertyValue<IPublishedContent>("heroBg"); }
		}

		///<summary>
		/// Mobile Hero Background
		///</summary>
		[ImplementPropertyType("mobileHeroBg")]
		public IPublishedContent MobileHeroBg
		{
			get { return this.GetPropertyValue<IPublishedContent>("mobileHeroBg"); }
		}

		///<summary>
		/// Portfolio Heading: Appears in left nav in desktop view
		///</summary>
		[ImplementPropertyType("portfolioHeading")]
		public string PortfolioHeading
		{
			get { return this.GetPropertyValue<string>("portfolioHeading"); }
		}

		///<summary>
		/// Social Media Icons
		///</summary>
		[ImplementPropertyType("socMedIcons")]
		public IEnumerable<IPublishedContent> SocMedIcons
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("socMedIcons"); }
		}
	}

	/// <summary>Social Media List</summary>
	[PublishedContentModel("socialMediaList")]
	public partial class SocialMediaList : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "socialMediaList";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public SocialMediaList(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<SocialMediaList, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Social Media Link
		///</summary>
		[ImplementPropertyType("socMedLink")]
		public string SocMedLink
		{
			get { return this.GetPropertyValue<string>("socMedLink"); }
		}

		///<summary>
		/// Social Media Type
		///</summary>
		[ImplementPropertyType("socMedType")]
		public string SocMedType
		{
			get { return this.GetPropertyValue<string>("socMedType"); }
		}
	}

	/// <summary>Portfolio List</summary>
	[PublishedContentModel("portfolioList")]
	public partial class PortfolioList : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "portfolioList";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public PortfolioList(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<PortfolioList, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Item Description
		///</summary>
		[ImplementPropertyType("portfolioItemDesc")]
		public IHtmlString PortfolioItemDesc
		{
			get { return this.GetPropertyValue<IHtmlString>("portfolioItemDesc"); }
		}

		///<summary>
		/// Item Images
		///</summary>
		[ImplementPropertyType("portfolioItemImages")]
		public IEnumerable<IPublishedContent> PortfolioItemImages
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("portfolioItemImages"); }
		}

		///<summary>
		/// Item Purchase Link: Leave blank if none applies.
		///</summary>
		[ImplementPropertyType("portfolioItemPurchaseLink")]
		public string PortfolioItemPurchaseLink
		{
			get { return this.GetPropertyValue<string>("portfolioItemPurchaseLink"); }
		}

		///<summary>
		/// Item Title
		///</summary>
		[ImplementPropertyType("portfolioItemTitle")]
		public string PortfolioItemTitle
		{
			get { return this.GetPropertyValue<string>("portfolioItemTitle"); }
		}

		///<summary>
		/// Item Type
		///</summary>
		[ImplementPropertyType("portfolioItemType")]
		public string PortfolioItemType
		{
			get { return this.GetPropertyValue<string>("portfolioItemType"); }
		}
	}

	/// <summary>Intro Screen</summary>
	[PublishedContentModel("introScreen")]
	public partial class IntroScreen : Master
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "introScreen";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public IntroScreen(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<IntroScreen, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Background Image
		///</summary>
		[ImplementPropertyType("backgroundImg")]
		public IPublishedContent BackgroundImg
		{
			get { return this.GetPropertyValue<IPublishedContent>("backgroundImg"); }
		}

		///<summary>
		/// Heading
		///</summary>
		[ImplementPropertyType("heading")]
		public IHtmlString Heading
		{
			get { return this.GetPropertyValue<IHtmlString>("heading"); }
		}
	}

	/// <summary>Portfolio Page</summary>
	[PublishedContentModel("portfolioPage")]
	public partial class PortfolioPage : Master
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "portfolioPage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public PortfolioPage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<PortfolioPage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Heading
		///</summary>
		[ImplementPropertyType("heading")]
		public string Heading
		{
			get { return this.GetPropertyValue<string>("heading"); }
		}
	}

	/// <summary>Bio Page</summary>
	[PublishedContentModel("bioPg")]
	public partial class BioPg : Master
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "bioPg";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public BioPg(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<BioPg, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Bio
		///</summary>
		[ImplementPropertyType("bio")]
		public IHtmlString Bio
		{
			get { return this.GetPropertyValue<IHtmlString>("bio"); }
		}

		///<summary>
		/// Bio Heading: Appears in left nav in desktop view
		///</summary>
		[ImplementPropertyType("bioHeading")]
		public string BioHeading
		{
			get { return this.GetPropertyValue<string>("bioHeading"); }
		}

		///<summary>
		/// Hero Photo
		///</summary>
		[ImplementPropertyType("heroPhoto")]
		public IPublishedContent HeroPhoto
		{
			get { return this.GetPropertyValue<IPublishedContent>("heroPhoto"); }
		}

		///<summary>
		/// Resume Heading: Appears in left nav in desktop view
		///</summary>
		[ImplementPropertyType("resumeHeading")]
		public string ResumeHeading
		{
			get { return this.GetPropertyValue<string>("resumeHeading"); }
		}

		///<summary>
		/// Resume Main
		///</summary>
		[ImplementPropertyType("resumeMain")]
		public IEnumerable<IPublishedContent> ResumeMain
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("resumeMain"); }
		}
	}

	/// <summary>Resume Item List</summary>
	[PublishedContentModel("resumeItemList")]
	public partial class ResumeItemList : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "resumeItemList";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public ResumeItemList(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<ResumeItemList, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Resume Section Content
		///</summary>
		[ImplementPropertyType("resumeSectionContent")]
		public IHtmlString ResumeSectionContent
		{
			get { return this.GetPropertyValue<IHtmlString>("resumeSectionContent"); }
		}

		///<summary>
		/// Section Heading
		///</summary>
		[ImplementPropertyType("resumeSectionHeading")]
		public string ResumeSectionHeading
		{
			get { return this.GetPropertyValue<string>("resumeSectionHeading"); }
		}
	}

	/// <summary>Portfolio Item</summary>
	[PublishedContentModel("portfolioItem")]
	public partial class PortfolioItem : Master
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "portfolioItem";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public PortfolioItem(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<PortfolioItem, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Item Description
		///</summary>
		[ImplementPropertyType("portfolioItemDesc")]
		public IHtmlString PortfolioItemDesc
		{
			get { return this.GetPropertyValue<IHtmlString>("portfolioItemDesc"); }
		}

		///<summary>
		/// Item Images
		///</summary>
		[ImplementPropertyType("portfolioItemImages")]
		public IEnumerable<IPublishedContent> PortfolioItemImages
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("portfolioItemImages"); }
		}

		///<summary>
		/// Item Purchase Link: Leave blank if none applies.
		///</summary>
		[ImplementPropertyType("portfolioItemPurchaseLink")]
		public string PortfolioItemPurchaseLink
		{
			get { return this.GetPropertyValue<string>("portfolioItemPurchaseLink"); }
		}

		///<summary>
		/// Item Title
		///</summary>
		[ImplementPropertyType("portfolioItemTitle")]
		public string PortfolioItemTitle
		{
			get { return this.GetPropertyValue<string>("portfolioItemTitle"); }
		}

		///<summary>
		/// Item Type
		///</summary>
		[ImplementPropertyType("portfolioItemType")]
		public string PortfolioItemType
		{
			get { return this.GetPropertyValue<string>("portfolioItemType"); }
		}
	}

	/// <summary>Folder</summary>
	[PublishedContentModel("Folder")]
	public partial class Folder : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "Folder";
		public new const PublishedItemType ModelItemType = PublishedItemType.Media;
#pragma warning restore 0109

		public Folder(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Folder, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Contents:
		///</summary>
		[ImplementPropertyType("contents")]
		public object Contents
		{
			get { return this.GetPropertyValue("contents"); }
		}
	}

	/// <summary>Image</summary>
	[PublishedContentModel("Image")]
	public partial class Image : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "Image";
		public new const PublishedItemType ModelItemType = PublishedItemType.Media;
#pragma warning restore 0109

		public Image(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Image, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Size
		///</summary>
		[ImplementPropertyType("umbracoBytes")]
		public string UmbracoBytes
		{
			get { return this.GetPropertyValue<string>("umbracoBytes"); }
		}

		///<summary>
		/// Type
		///</summary>
		[ImplementPropertyType("umbracoExtension")]
		public string UmbracoExtension
		{
			get { return this.GetPropertyValue<string>("umbracoExtension"); }
		}

		///<summary>
		/// Upload image
		///</summary>
		[ImplementPropertyType("umbracoFile")]
		public Umbraco.Web.Models.ImageCropDataSet UmbracoFile
		{
			get { return this.GetPropertyValue<Umbraco.Web.Models.ImageCropDataSet>("umbracoFile"); }
		}

		///<summary>
		/// Height
		///</summary>
		[ImplementPropertyType("umbracoHeight")]
		public string UmbracoHeight
		{
			get { return this.GetPropertyValue<string>("umbracoHeight"); }
		}

		///<summary>
		/// Width
		///</summary>
		[ImplementPropertyType("umbracoWidth")]
		public string UmbracoWidth
		{
			get { return this.GetPropertyValue<string>("umbracoWidth"); }
		}
	}

	/// <summary>File</summary>
	[PublishedContentModel("File")]
	public partial class File : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "File";
		public new const PublishedItemType ModelItemType = PublishedItemType.Media;
#pragma warning restore 0109

		public File(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<File, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Size
		///</summary>
		[ImplementPropertyType("umbracoBytes")]
		public string UmbracoBytes
		{
			get { return this.GetPropertyValue<string>("umbracoBytes"); }
		}

		///<summary>
		/// Type
		///</summary>
		[ImplementPropertyType("umbracoExtension")]
		public string UmbracoExtension
		{
			get { return this.GetPropertyValue<string>("umbracoExtension"); }
		}

		///<summary>
		/// Upload file
		///</summary>
		[ImplementPropertyType("umbracoFile")]
		public string UmbracoFile
		{
			get { return this.GetPropertyValue<string>("umbracoFile"); }
		}
	}

	/// <summary>Member</summary>
	[PublishedContentModel("Member")]
	public partial class Member : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "Member";
		public new const PublishedItemType ModelItemType = PublishedItemType.Member;
#pragma warning restore 0109

		public Member(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Member, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Is Approved
		///</summary>
		[ImplementPropertyType("umbracoMemberApproved")]
		public bool UmbracoMemberApproved
		{
			get { return this.GetPropertyValue<bool>("umbracoMemberApproved"); }
		}

		///<summary>
		/// Comments
		///</summary>
		[ImplementPropertyType("umbracoMemberComments")]
		public string UmbracoMemberComments
		{
			get { return this.GetPropertyValue<string>("umbracoMemberComments"); }
		}

		///<summary>
		/// Failed Password Attempts
		///</summary>
		[ImplementPropertyType("umbracoMemberFailedPasswordAttempts")]
		public string UmbracoMemberFailedPasswordAttempts
		{
			get { return this.GetPropertyValue<string>("umbracoMemberFailedPasswordAttempts"); }
		}

		///<summary>
		/// Last Lockout Date
		///</summary>
		[ImplementPropertyType("umbracoMemberLastLockoutDate")]
		public string UmbracoMemberLastLockoutDate
		{
			get { return this.GetPropertyValue<string>("umbracoMemberLastLockoutDate"); }
		}

		///<summary>
		/// Last Login Date
		///</summary>
		[ImplementPropertyType("umbracoMemberLastLogin")]
		public string UmbracoMemberLastLogin
		{
			get { return this.GetPropertyValue<string>("umbracoMemberLastLogin"); }
		}

		///<summary>
		/// Last Password Change Date
		///</summary>
		[ImplementPropertyType("umbracoMemberLastPasswordChangeDate")]
		public string UmbracoMemberLastPasswordChangeDate
		{
			get { return this.GetPropertyValue<string>("umbracoMemberLastPasswordChangeDate"); }
		}

		///<summary>
		/// Is Locked Out
		///</summary>
		[ImplementPropertyType("umbracoMemberLockedOut")]
		public bool UmbracoMemberLockedOut
		{
			get { return this.GetPropertyValue<bool>("umbracoMemberLockedOut"); }
		}

		///<summary>
		/// Password Answer
		///</summary>
		[ImplementPropertyType("umbracoMemberPasswordRetrievalAnswer")]
		public string UmbracoMemberPasswordRetrievalAnswer
		{
			get { return this.GetPropertyValue<string>("umbracoMemberPasswordRetrievalAnswer"); }
		}

		///<summary>
		/// Password Question
		///</summary>
		[ImplementPropertyType("umbracoMemberPasswordRetrievalQuestion")]
		public string UmbracoMemberPasswordRetrievalQuestion
		{
			get { return this.GetPropertyValue<string>("umbracoMemberPasswordRetrievalQuestion"); }
		}
	}

}
