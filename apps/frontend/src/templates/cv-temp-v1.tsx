import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Download, Eye } from "lucide-react";

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  website: string;
  summary: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

interface Skill {
  id: string;
  name: string;
  level: string;
}

export default function CvTempV1() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    website: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  ]);

  const [educations, setEducations] = useState<Education[]>([
    {
      id: "1",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "", level: "Beginner" },
  ]);

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Debug: Log state changes
  React.useEffect(() => {
    console.log("Personal Info updated:", personalInfo);
  }, [personalInfo]);

  React.useEffect(() => {
    console.log("Experiences updated:", experiences);
  }, [experiences]);

  React.useEffect(() => {
    console.log("Educations updated:", educations);
  }, [educations]);

  React.useEffect(() => {
    console.log("Skills updated:", skills);
  }, [skills]);

  // Helper functions
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now().toString(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now().toString(),
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ]);
  };

  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        id: Date.now().toString(),
        name: "",
        level: "Beginner",
      },
    ]);
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any
  ) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CV Builder - Template V1</h1>
        <div className="flex gap-2">
          <Button onClick={() => setIsPreviewMode(true)} variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Debug Info */}
      <div className="mb-4 p-4 bg-gray-100 rounded-lg text-sm">
        <strong>Debug Info:</strong> Name: "{personalInfo.fullName}", Email: "
        {personalInfo.email}", Experiences: {experiences.length}, Skills:{" "}
        {skills.length}
        <br />
        <Button
          onClick={() =>
            setPersonalInfo({ ...personalInfo, fullName: "Test Name" })
          }
          size="sm"
          className="mt-2"
        >
          Test State Update
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={personalInfo.fullName}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={personalInfo.address}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      address: e.target.value,
                    })
                  }
                  placeholder="City, State, Country"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={personalInfo.linkedin}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        linkedin: e.target.value,
                      })
                    }
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={personalInfo.website}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        website: e.target.value,
                      })
                    }
                    placeholder="johndoe.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="summary">Professional Summary</Label>
                <textarea
                  id="summary"
                  value={personalInfo.summary}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setPersonalInfo({
                      ...personalInfo,
                      summary: e.target.value,
                    })
                  }
                  placeholder="Brief summary of your professional background and key achievements..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Professional Experience</CardTitle>
                <Button onClick={addExperience} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Experience {index + 1}</h4>
                    {experiences.length > 1 && (
                      <Button
                        onClick={() => removeExperience(exp.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Position *</Label>
                      <Input
                        value={exp.position}
                        onChange={(e) =>
                          updateExperience(exp.id, "position", e.target.value)
                        }
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div>
                      <Label>Company *</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(exp.id, "company", e.target.value)
                        }
                        placeholder="Tech Corp"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Start Date</Label>
                      <Input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) =>
                          updateExperience(exp.id, "startDate", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) =>
                          updateExperience(exp.id, "endDate", e.target.value)
                        }
                        disabled={exp.current}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onChange={(e) =>
                        updateExperience(exp.id, "current", e.target.checked)
                      }
                    />
                    <Label htmlFor={`current-${exp.id}`}>
                      Currently working here
                    </Label>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      value={exp.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        updateExperience(exp.id, "description", e.target.value)
                      }
                      placeholder="Describe your responsibilities and achievements..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Education</CardTitle>
                <Button onClick={addEducation} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {educations.map((edu, index) => (
                <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Education {index + 1}</h4>
                    {educations.length > 1 && (
                      <Button
                        onClick={() => removeEducation(edu.id)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Degree *</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) =>
                          updateEducation(edu.id, "degree", e.target.value)
                        }
                        placeholder="Bachelor of Science"
                      />
                    </div>
                    <div>
                      <Label>Field of Study *</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) =>
                          updateEducation(edu.id, "field", e.target.value)
                        }
                        placeholder="Computer Science"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Institution *</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(edu.id, "institution", e.target.value)
                      }
                      placeholder="University Name"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>Start Date</Label>
                      <Input
                        type="month"
                        value={edu.startDate}
                        onChange={(e) =>
                          updateEducation(edu.id, "startDate", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        value={edu.endDate}
                        onChange={(e) =>
                          updateEducation(edu.id, "endDate", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label>GPA</Label>
                      <Input
                        value={edu.gpa}
                        onChange={(e) =>
                          updateEducation(edu.id, "gpa", e.target.value)
                        }
                        placeholder="3.8"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Skills</CardTitle>
                <Button onClick={addSkill} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Label>Skill Name</Label>
                    <Input
                      value={skill.name}
                      onChange={(e) =>
                        updateSkill(skill.id, "name", e.target.value)
                      }
                      placeholder="JavaScript"
                    />
                  </div>
                  <div className="w-32">
                    <Label>Level</Label>
                    <select
                      value={skill.level}
                      onChange={(e) =>
                        updateSkill(skill.id, "level", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  {skills.length > 1 && (
                    <Button
                      onClick={() => removeSkill(skill.id)}
                      variant="destructive"
                      size="sm"
                      className="mt-6"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="lg:sticky lg:top-6 lg:h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-[800px] overflow-y-auto">
                <div
                  key={`preview-${personalInfo.fullName}-${experiences.length}-${skills.length}`}
                  className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {personalInfo.fullName || "Your Name"}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                      {personalInfo.email && <span>{personalInfo.email}</span>}
                      {personalInfo.phone && <span>{personalInfo.phone}</span>}
                      {personalInfo.address && (
                        <span>{personalInfo.address}</span>
                      )}
                      {personalInfo.linkedin && (
                        <span>LinkedIn: {personalInfo.linkedin}</span>
                      )}
                      {personalInfo.website && (
                        <span>Website: {personalInfo.website}</span>
                      )}
                    </div>
                  </div>

                  <Separator className="mb-6" />

                  {/* Summary */}
                  {personalInfo.summary && (
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Professional Summary
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {personalInfo.summary}
                      </p>
                    </div>
                  )}

                  {/* Experience */}
                  {experiences.some((exp) => exp.company) && (
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Professional Experience
                      </h2>
                      {experiences
                        .filter((exp) => exp.company)
                        .map((exp) => (
                          <div key={exp.id} className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {exp.position}
                                </h3>
                                <p className="text-gray-600">{exp.company}</p>
                              </div>
                              <span className="text-sm text-gray-500">
                                {exp.startDate} -{" "}
                                {exp.current ? "Present" : exp.endDate}
                              </span>
                            </div>
                            {exp.description && (
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Education */}
                  {educations.some((edu) => edu.institution) && (
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Education
                      </h2>
                      {educations
                        .filter((edu) => edu.institution)
                        .map((edu) => (
                          <div key={edu.id} className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {edu.degree} in {edu.field}
                                </h3>
                                <p className="text-gray-600">
                                  {edu.institution}
                                </p>
                              </div>
                              <div className="text-right text-sm text-gray-500">
                                <div>
                                  {edu.startDate} - {edu.endDate}
                                </div>
                                {edu.gpa && <div>GPA: {edu.gpa}</div>}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Skills */}
                  {skills.some((skill) => skill.name) && (
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Skills
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {skills
                          .filter((skill) => skill.name)
                          .map((skill) => (
                            <div
                              key={skill.id}
                              className="flex justify-between items-center"
                            >
                              <span className="text-gray-700">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-500">
                                {skill.level}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
