import { useState } from "react";

const CreateUpdateSection = () => {

    const initialSectionvalues = {
        Title: "",
        Content: "",
    }
    const [section, setSection] = useState(initialSectionvalues);

    const handleInputChange = () => {

    }

    return (
        <div>
            <p>
                <h4>Create Section</h4>
            </p>

            <div className="row">
                <div className="col-lg-12">
                    <section className="panel">
                        <div className="panel-body">
                            <div className="form">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Title">Title</label>
                                        <input type="text" id="Title" value={section.Title} onChange={handleInputChange} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            Content
                                            <textarea className="form-control" value={section.Content} onChange={handleInputChange} />
                                        </label>                                       
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <label for="notembedded" className="radio">Open Content in New Page</label>
                                            <input type="radio" id="radioBtn" onclick="test(this)" value="false" name="IsEmbeded" asp-for="@Model.IsEmbeded" checked />
                                            <label for="embedded" className="radio">Embed Content in Course Page</label>
                                            <input type="radio" id="radioBtn" onclick="test(this)" value="true" name="IsEmbeded" asp-for="@Model.IsEmbeded" />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label asp-for="Restriction">Select View</label>
                                        <span asp-validation-for="Restriction" className="text-danger"></span>
                                        <select asp-for="@Model.Restriction" name="restriction">
                                            <option value="false">Publish Section</option>
                                            <option value="true">Hide Section</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Unlock View on<span>*</span></label>
                                        <input id="restriction" type="date" name="UnlockOn" asp-for="@Model.UnlockOn" />
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="form-group">
                                        <label>Select Rank</label>
                                        <span asp-validation-for="Rank" className="text-danger"></span>
                                        <select asp-for="@Model.Rank" name="selectedRank" className="custom-select" placeholder="section position in course view">

                                            {/* @{
                                    int count = this.ViewBag.SectionsCount;

                                    for (int i = 0; i < count; i++)
                                    {
                                        <option value="@this.ViewBag.Sections[i]">@this.ViewBag.Sections[i]</option>
                                    }
                                } */}

                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <br />
                                        <button type="submit" asp-controller="Section" asp-action="CreateSection" className="btn-primary">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default CreateUpdateSection;